terraform {
  backend "gcs" {
    bucket  = "terraform-oge"
    prefix  = "ogefreelancing/state"
  }
}
