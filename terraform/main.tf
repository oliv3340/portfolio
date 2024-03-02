import {
  id = "projects/ogefreelancing-415820/locations/global/triggers/build-and-deploy"
  to = google_cloudbuild_trigger.build-and-deploy
}

resource "google_cloudbuild_trigger" "build-and-deploy" {
  location = "global"
  name     = "build-and-deploy"
  filename = "cloudbuild.yaml"

  github {
    owner = "oliv3340"
    name   = "portfolio"
    push {
        tag = "^.*"
    }
  }
}
