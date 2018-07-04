import {HomeComponent} from "./pages/home/home.component";
import {ProposalComponent} from "./pages/proposal/proposal.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {ExamplesComponent} from "./pages/examples/examples.component";
import {DesignsComponent} from "./pages/designs/designs.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'proposal',
        component: ProposalComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'examples',
        component: ExamplesComponent
    },
    {
        path: 'designs',
        component: DesignsComponent
    }
];