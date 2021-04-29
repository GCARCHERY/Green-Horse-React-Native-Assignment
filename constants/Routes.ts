///////////////// -- HOST -- /////////////////
export const ROOT = 'https://greenhorsegames.com';
/////////////// -- END-HOST -- ///////////////

/////////////// -- DECLARE-ROUTES -- ///////////////

const routeObjects = [
    //////////////////////////////////////////////
    ///////////////// -- PROFILE -- /////////////////
    {
        name: 'fetch_profile',
        url: `${ROOT}/tests/android/profile.php`
    },
    /////////////// -- END-PROFILE -- ///////////////
    //////////////////////////////////////////////
    /////////////// -- GAME -- ////////////////
    {
        name: 'fetch_challanges',
        url: `${ROOT}/tests/android/challenge.php`
    },
    {
        name: 'claim_reward',
        url: `${ROOT}/tests/android/collect.php`
    }
    /////////////// -- END-GAME -- ///////////////
] as const

/////////////// -- END-DECLARE-ROUTES -- ///////////////

const routes = routeObjects

export type Routes = typeof routes[number]['name']
export const routesObject = routeObjects
