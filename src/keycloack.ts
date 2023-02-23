import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'mpg-game-realm',
    clientId: "mpg-game-client"
})

export default keycloak;