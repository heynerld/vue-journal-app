
// TODO: El state es reactivo

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Anim fugiat ea consectetur amet esse ea occaecat officia veniam. Eu deserunt non dolor commodo commodo laborum irure labore sint id aliquip fugiat officia. Pariatur commodo veniam non deserunt voluptate dolor quis ex adipisicing enim excepteur non deserunt est. Ipsum deserunt excepteur adipisicing aliquip do occaecat elit ullamco culpa sunt ullamco ex. Non dolore consectetur consectetur pariatur elit reprehenderit.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Dolor adipisicing tempor mollit voluptate deserunt. Culpa culpa dolor sit officia excepteur sit commodo elit ipsum. Aliqua laborum veniam aute ipsum aute est minim velit sunt sint. Elit sint qui consequat officia irure commodo irure voluptate reprehenderit cillum do labore adipisicing. Lorem elit anim Lorem velit voluptate.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Ad veniam mollit enim ut. Incididunt adipisicing officia cupidatat commodo dolor. Consectetur mollit sit consectetur ullamco veniam irure ad Lorem elit magna enim qui adipisicing. Laboris aute et minim sunt sint Lorem enim labore sint minim elit duis veniam. Consequat tempor proident est mollit excepteur incididunt culpa eu.',
            picture: null
        },
    ]
});