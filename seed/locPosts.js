const db = require('../db')
const { Locations } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const allLocations = async () => {
    let cities = [
        {
            name: "New York City",
            location: "New York City, NY",
            likes: 0,
            details: "New York, often called New York City (NYC) to distinguish it from the state of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area.[9] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, dining, art, fashion, and sports, and is the most photographed city in the world.[10] Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[11][12] and has sometimes been called the capital of the world.",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg"

        },

        {
            name: "Los Angeles",
            location: "Los Angeles, CA",
            likes: 0,
            details: "Los Angeles (US: /lɔːs ˈændʒələs/ (listen) lawss AN-jəl-əs;[a] Spanish: Los Ángeles [los ˈaŋxeles], lit. 'The Angels'), often referred to by its initials L.A.,[14] is the largest city in California. With a 2020 population of 3,898,747,[10] it is the second-largest city in the United States, following New York City. Los Angeles is known for its Mediterranean climate, ethnic and cultural diversity, Hollywood film industry and sprawling metropolitan area.", 
            image: "https://uclalaces.files.wordpress.com/2022/01/gettyimages-947698310-1729da81e58f40058a9e45ba82532d57-2f992696318c42cbbd595ef3ec1043fd.jpg"
        },

        {
            name:"Miami",
            location: "Miami, FL", 
            likes: 0, 
            details: "Miami officially the City of Miami, is a coastal metropolis located in Miami-Dade County in southeastern Florida (United States). With a population of 442,241 as of the 2020 census,[2] it is the second-most populous city in Florida, eleventh-most populous city in the Southeast, and 44th-most populous city in the United States. Miami is the core of the nation's eighth-largest metropolitan area with 6,138,333 people.[7] The city has the third-largest skyline in the U.S. with over 300 high-rises,[11] 58 of which exceed 491 ft (150 m).[12]",
            image: "https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg"
        },

        {
            name: "Chicago",
            location: "Chicago, IL", 
            likes: 0,
            details: "Chicago (/ʃɪˈkɑːɡoʊ/ (audio speaker iconlisten) shih-KAH-goh, locally also /ʃɪˈkɔːɡoʊ/ shih-KAW-goh[5]), officially the City of Chicago, is the most populous city in the U.S. state of Illinois, and the third-most populous city in the United States, following New York City and Los Angeles. With a population of 2,746,388 in the 2020 census,[6] it is also the most populous city in the Midwestern United States and the fifth most populous city in North America. Chicago is the county seat of Cook County, the second most populous county in the U.S., while a small portion of the city's O'Hare International Airport also extends into DuPage County. Chicago is the principal city of the Chicago metropolitan area, defined as either the U.S. Census Bureau's metropolitan statistical area (9.6 million people) or the combined statistical area (almost 10 million residents), often called Chicagoland. It is one of the 40 largest urban areas in the world.",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Chicago_montage1.jpg"
        }


    ]
    await Locations.insertMany(cities)
    console.log('Inserted Locations')

}

const run = async () => {
    await allLocations()
    db.close()
}

run()
