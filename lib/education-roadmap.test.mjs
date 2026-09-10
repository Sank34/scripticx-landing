import assert from "node:assert/strict";
import { test } from "node:test";

import { educationContent } from "../config/education.ts";

for (const locale of ["en", "ro"]) {
  test(`${locale}: every preparation group includes its roadmap stage`, () => {
    const { groups, roadmap } = educationContent[locale];
    assert.deepEqual(Object.keys(roadmap.tracks), Object.keys(groups.tracks));

    for (const [track, path] of Object.entries(roadmap.tracks)) {
      assert.ok(path.description.trim());
      groups.tracks[track].forEach((group) => {
        const stage = group.roadmapStage;
        assert.ok(stage.label.trim());
        assert.ok(stage.description.trim());
        assert.ok(group.title.trim());
        assert.ok(group.format.trim());
      });
    }

    assert.ok(roadmap.practiceTitle.trim());
    assert.ok(roadmap.practiceDescription.trim());
  });
}
