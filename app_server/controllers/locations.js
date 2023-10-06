// const homelist = (req, res) => {
//     res.render('location-list',
//      {title:'Fit G - Just do it!!',
//     pageHeader: {
//         title: 'FIT G',
//         strapline: 'Find places to work on yourself!'
//     }
//     });
// };

const locations = (req, res) => {
    res.render('location-list',{
        title:'FIT G - Just do it!!',
        pageHeader: {
        title: 'FIT G',
        strapline: 'Find places to work on yourself!'
        },
        sidebar: "Are you ready to embark on a fitness journey that will transform your life? Look no further! [Community Name] is your all-in-one destination for gym enthusiasts, fitness fanatics, and anyone looking to embrace a healthier lifestyle.",
        locations: [
            {
                name: 'Pro Fitness Club',
                rating: 5,
                address: 'Hitech City, Hyderabad',
                dist: '10km'
            },
           
            {
                name: 'Fusion Fitness studio',
                rating: 5,
                address: 'Kukatpally, Hyderabad',
                dist: '12km'
            },
           
            {
                name: 'Fitness Fusion Finds',
                rating: 5,
                address: 'Secundarabad',
                dist: '5km'
            },
            {
                name: 'LiftLab Creations',
                rating: 4,
                address: 'Habsiguda,Hyderabad',
                dist: '500m'
            },
            {
                name: 'Star Fitness studio',
                rating: 4,
                address: 'Alwal, Hyderabad',
                dist: '50km'
            },
            {
                name: 'StrongWear Studio',
                rating: 4,
                address: 'Dil Sukh Nagar, Hyderabad',
                dist: '9km'
            },
            {
                name: 'PowerPulse Provisions',
                rating: 3,
                address: 'Raidurg, Hyderabad',
                dist: '5km'
            },
            {
                name: 'FitGear Haven',
                rating: 3,
                address: 'Boduppal, Hyderabad',
                dist: '1.9km'
            },
            {
                name: 'Cult Fitness studio',
                rating: 3,
                address: 'Uppal, Hyderabad',
                dist: '3km'
            }
        ]
    });
};
const locationInfo = (req, res) => {
    res.render('location-info',
        {
            title: 'Starcups',
            pageHeader: {
                title: 'Loc8r',
            },
            sidebar: {
                context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            locationInfo: {
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                coords: { lat: 51.455041, lng: -0.9690884 },
                openingTimes: [
                    {
                        days: 'Monday - Friday',
                        opening: '7:00am',
                        closing: '7:00pm',
                        closed: false
                    },
                    {
                        days: 'Saturday',
                        opening: '8:00am',
                        closing: '5:00pm',
                        closed: false
                    },
                    {
                        days: 'Sunday',
                        closed: true
                    }
                ],
                reviews: [
                    {
                        author: 'Simon Holmes',
                        rating: 5,
                        timestamp: '16 July 2013',
                        reviewText: 'What a great place. I can\'t say enough good things about it.'
                    },
                    {
                        author: 'Charlie Chaplin',
                        rating: 3,
                        timestamp: '16 June 2013',
                        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                    }
                ]
            }
        }
    );
};
module.exports = {
    // homelist,
    locations,
    locationInfo
};