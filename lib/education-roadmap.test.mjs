import assert from "node:assert/strict";
import { test } from "node:test";

import { divisionDetailsContent } from "./division-details-content.ts";

for (const locale of ["en", "ro"]) {
  test(`${locale}: every preparation group has a matching roadmap stage`, () => {
    const { groups, roadmap } = divisionDetailsContent[locale].education;
    assert.deepEqual(Object.keys(roadmap.tracks), Object.keys(groups.tracks));

    for (const [track, path] of Object.entries(roadmap.tracks)) {
      assert.equal(path.stages.length, groups.tracks[track].length);
      assert.ok(path.description.trim());
      path.stages.forEach((stage, index) => {
        assert.ok(stage.label.trim());
        assert.ok(stage.description.trim());
        assert.ok(groups.tracks[track][index].title.trim());
        assert.ok(groups.tracks[track][index].format.trim());
      });
    }

    assert.ok(roadmap.practiceTitle.trim());
    assert.ok(roadmap.practiceDescription.trim());
  });
}
