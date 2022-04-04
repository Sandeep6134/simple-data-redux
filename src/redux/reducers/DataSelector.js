
const spotify = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/800px-Spotify_App_Logo.svg.png?20210620075506"

const instagram = "https://miro.medium.com/max/1200/1*WCLKc-a5XllbjtwkOv9RZA.png"

const tiktok = "https://image.similarpng.com/very-thumbnail/2020/10/Logo-of-the-tik-tok-app-design-on-transparent--PNG.png"

const initialState = [
    {
        url: spotify,
        monthlylisteners: "40.8M",
        followers: "47.8M",
        totalstreams: "15.1M",
        popularityscore: "84",
    },
    {
        url: instagram,
        followers: "177.M",
        likes: "566.9M",
        comments: "73.1M",
        engagementrate: "1.14%"
    },
    {
        url: tiktok,
        followers: "23.6M",
        views: "46.3M",
        creations: "56M",
        engagementrate: "1.27%"
    }


]

const dataSelector = (state = initialState, action) => {
    switch (action.type) {
        case "SPOTIFY":
            return { ...state, spotify }
        case "INSTAGRAM":
            return { ...state, instagram }
        case "TIKTOK":
            return { ...state, tiktok }
        default:
            return state
    }
}

export default dataSelector;