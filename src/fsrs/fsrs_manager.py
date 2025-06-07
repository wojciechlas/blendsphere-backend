
from datetime import datetime

from fsrs import Scheduler, Card, State, Rating

from src.pb_utils.client import Client

pocketbase_client = Client("http://127.0.0.1:8090/")
user_data = pocketbase_client.collection("users").auth_with_password(
    "test@test.pl", "test1234")

scheduler = Scheduler()

def review_card(card_id: str, rating: int):
    """
    Review a flashcard calculate and update next review parameters and update it in PocketBase.

    Args:
        card_id (str): Unique identifier for the flashcard.
        rating (int): Rating given to the flashcard (1-4).
    """
    pb_card = pocketbase_client.get_flashcard(card_id)

    if pb_card.stability is None or pb_card.stability == 0:
        pb_card.stability = 1.0
    if pb_card.difficulty is None or pb_card.difficulty == 0:
        pb_card.difficulty = 1.0
    if pb_card.step is None or pb_card.step == 0:
        pb_card.step = 0
    card = Card(None, map_state(pb_card.state), None, pb_card.stability, pb_card.difficulty,
                parse_date(pb_card.next_review), parse_date(pb_card.last_review))

    card, review_log = scheduler.review_card(card, Rating(rating))

    updated_data = update_card_data(pb_card, card)
    pocketbase_client.update_flashcard(card_id, updated_data)
    return card, review_log


def update_card_data(pb_card, card):
    pb_card.state = card.state.name.upper()
    pb_card.step = card.step
    pb_card.stability = card.stability
    pb_card.difficulty = card.difficulty
    pb_card.last_review = card.last_review
    pb_card.next_review = card.due
    update_data = vars(pb_card)
    for key, value in update_data.items():
        if isinstance(value, datetime):
            update_data[key] = value.isoformat()
    return update_data


def map_state(value: str):
    if value.lower() == "new":
        return State.Learning
    try:
        return State[value.lower().capitalize()]
    except KeyError:
        raise ValueError(f"'{value}' is not a valid state")


def parse_date(date_str):
    try:
        return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        return None

