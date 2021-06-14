import {
    BROWSE_ROUTE,
    FIND_ROUTE,
    HIRE_ROUTE, INFO_ROUTE,
    JOBS_ROUTE,
    LANDING_ROUTE, LINKS_ROUTE,
    LOGIN_ROUTE, MAIN_F, MAIN_H, PASSWORD_ROUTE,
    PERSONAL_ROUTE,
    POST_ROUTE, PROFILE_F, PROJECT_ROUTE,
    PROJECTS_ROUTE, REGISTRATION2_ROUTE, REGISTRATION_ROUTE,
    REQUESTS_ROUTE, SKILLS_ROUTE
} from "./utils/consts";
import Main_freelancer from "./pages/Main_freelancer"
import Main_hirer from "./pages/Main_hirer"
import LandingPage from "./pages/LandingPage"
import RegisterStep1 from "./pages/RegisterStep1"
import RegisterStep2 from "./pages/RegisterStep2"
import Login from "./pages/Login"
import Profile_freelancer from "./pages/Profile_freelancer"
import Main_freelancer_jobs from "./pages/Main_freelancer_jobs";
import Main_freelancer_requests from "./pages/Main_freelancer_requests";
import Main_hirer_projects from "./pages/Main_hirer_projects";
import Main_hirer_find from "./pages/Main_hirer_find";
import Main_hirer_post from "./pages/Main_hirer_post";
import Profile_hirer from "./pages/Profile_hirer";
import Settings_personal from "./pages/Settings_personal";
import Settings_password from "./pages/Settings_password";
import Project_info from "./pages/Project_info";
import Main_freelancer_browse from "./pages/Main_freelancer_browse";
import Profile_edit_skills from "./pages/Profile_edit_skills";
import Profile_edit_links from "./pages/Profile_edit_links";

export const authRoutes = [
    {
        path: MAIN_F,
        Component: Main_freelancer
    },
    {
        path: PROFILE_F,
        Component: Profile_freelancer
    },
    {
        path: MAIN_H,
        Component: Main_hirer
    },
    {
        path: JOBS_ROUTE,
        Component: Main_freelancer_jobs
    },
    {
        path: BROWSE_ROUTE,
        Component: Main_freelancer_browse
    },
    {
        path: REQUESTS_ROUTE,
        Component: Main_freelancer_requests
    },
    {
        path: PROJECTS_ROUTE,
        Component: Main_hirer_projects
    },
    {
        path: FIND_ROUTE,
        Component: Main_hirer_find
    },
    {
        path: POST_ROUTE,
        Component: Main_hirer_post
    },
    {
        path: HIRE_ROUTE,
        Component: Profile_hirer
    },
    {
        path: PERSONAL_ROUTE,
        Component: Settings_personal
    },
    {
        path: PASSWORD_ROUTE,
        Component: Settings_password
    },
    {
        path: PROJECT_ROUTE,
        Component: Project_info
    },
    {
        path: SKILLS_ROUTE,
        Component: Profile_edit_skills
    },
    {
        path: LINKS_ROUTE,
        Component: Profile_edit_links
    },
    {
        path: INFO_ROUTE,
        Component: Project_info
    }
]

export const publicRoutes = [
    {
        path: LANDING_ROUTE,
        Component: LandingPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegisterStep1
    },
    {
        path: REGISTRATION2_ROUTE,
        Component: RegisterStep2
    }
]