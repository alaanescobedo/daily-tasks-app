import initStoryshots, { multiSnapshotWithOptions, Stories2SnapsConverter } from '@storybook/addon-storyshots'
import './.storybook/mocks'

initStoryshots({
  test: multiSnapshotWithOptions({}),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotExtension: '.ts.snap'
  })
})
