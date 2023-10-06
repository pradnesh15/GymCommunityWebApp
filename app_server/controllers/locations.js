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

const locationInfo = function(req, res){
    res.render('location-info', {
      pageHeader: {
        title: 'Pro Fitness Club'
      },
      sidebar: {
        context: ' we are more than just a fitness center - we are a community dedicated to helping you achieve your health and wellness goals. Here is what sets us apart ',
        types: ['1. Expert Guidance',  '2. State-of-the-Art Facilities',  '3. Nutrition Support', '4. Clean and Safe Environment']
        //callToAction: 'Expert Guidance '
       //callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location_info: {
        name: 'Pro Fitness Club',
        address: 'Hitech City, Hyderabad',
        rating: 5,
        facilities: ['Standard equipments', 'Healthy-diet', 'Personal guidance'],
        coords: {
          lat: 51.455041,
          lng: -0.9690884
        },
        openingTimes: [{
          days: 'Monday - Friday',
          opening: '7:00am',
          closing: '7:00pm',
          closed: false
        }, {
          days: 'Saturday',
          opening: '8:00am',
          closing: '5:00pm',
          closed: false
        }, {
          days: 'Sunday',
          closed: true
        }],
        reviews: [{
          author: 'Pradnesh D',
          rating: 5,
          timestamp: '16 July 2023',
          reviewText: 'What a great community !.'
        }, {
          author: 'Professor',
          rating: 3,
          timestamp: '5 April 2023',
          reviewText: 'Overall it was okay. But I wasn\'t comfortable with the guidance tips.'
        }]
      },
      
    });
  };
module.exports = {
    // homelist,
    locations,
    locationInfo
};