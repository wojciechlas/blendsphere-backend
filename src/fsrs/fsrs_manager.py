
from fsrs import Scheduler, Card, Rating, ReviewLog
from datetime import datetime, timezone
from src.pb_utils.client import Client

pocketbase_client = Client("http://127.0.0.1:8090/")
user_data = pocketbase_client.collection("users").auth_with_password(
    "test@test.pl", "test1234")

scheduler = Scheduler()

async def review_card(card_id: str, rating: int):
    pb_card = pocketbase_client.get_flashcard(card_id) #todo extend pb model (missing fields: step) and check connectivity

    card = Card(card_id, pb_card.state, None, pb_card.stability, pb_card.difficulty,
                datetime.fromisoformat(pb_card.nextReview), datetime.fromisoformat(pb_card.lastReview))

    card, review_log = scheduler.review_card(card, Rating(rating))

    pb_card.state = card.state
    # pb_card.step = card.step
    pb_card.stability = card.stability
    pb_card.difficulty = card.difficulty
    pb_card.lastReview = card.last_review.isoformat()
    pb_card.nextReview = card.due
    pocketbase_client.update_flashcard(card.id, pb_card.to_dict())

# todo save review log to pocketbase - fix model?
    # review_data = ReviewData(review_log.card_id, review_log.rating, review_log.review_datetime, review_log.review_duration)
    # pocketbase_client.save_flashcard_review(card.id, review_data.to_dict())

    return card, review_log


class ReviewData:
    card_id: int
    rating: int
    review_datetime: datetime
    review_duration: int | None

    def __init__(
            self,
            card_id: int,
            rating: int,
            review_datetime: datetime,
            review_duration: int | None = None,
    ) -> None:
        self.card_id = card_id
        self.rating = rating
        self.review_datetime = review_datetime
        self.review_duration = review_duration

    def to_dict(self):
        return {
            "review_data": {
                "rating": self.rating,
                "review_datetime": self.review_datetime.isoformat(),
                "review_duration": self.review_duration
            }
        }