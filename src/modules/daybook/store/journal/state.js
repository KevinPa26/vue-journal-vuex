
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 123123123123
            date: new Date().toDateString(), // sat 23, Mayo
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum similique minima, aliquid sunt doloribus culpa iusto quae cumque eaque aspernatur iste, ratione excepturi minus cupiditate velit accusantium! Obcaecati, aspernatur?',
            picture: null // https://....
        },
        {
            id: new Date().getTime() + 100, // 123123123123
            date: new Date().toDateString(), // sat 23, Mayo
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius ratione inventore? Beatae aspernatur ipsam quo! Quae itaque blanditiis sit! Deserunt fugiat minima mollitia voluptatem odit blanditiis sed quidem! Doloribus?',
            picture: null // https://....
        },
        {
            id: new Date().getTime() + 200, // 123123123123
            date: new Date().toDateString(), // sat 23, Mayo
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius ratione inventore? Beatae aspernatur ipsam quo! Quae itaque blanditiis sit! Deserunt fugiat minima mollitia voluptatem odit blanditiis sed quidem! Doloribus?',
            picture: null // https://....
        }
    ]
})