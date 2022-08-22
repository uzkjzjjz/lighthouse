import {UserFlow as UserFlow_} from '../core/fraggle-rock/user-flow';

declare module UserFlow {
  export interface FlowArtifacts {
    gatherSteps: GatherStep[];
    name?: string;
  }

  export interface Options {
    config: LH.Config.Json;
    name?: string;
  }

  export interface StepFlags extends LH.Flags {
    stepName?: string;
  }

  export interface GatherStep {
    artifacts: LH.Artifacts;
    stepFlags?: StepFlags;
  }
}

type UserFlow = typeof UserFlow_;

export default UserFlow;
