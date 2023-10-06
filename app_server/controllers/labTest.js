const tests = (req, res) => {
    res.render('lab-test', {
        title: 'Lab Tests',
        tests: [
            {
                img: '/images/body-health.png',
                name: 'Full Body Checkup',
                price: 999
            },
            {
                img: '/images/immunity.png',
                name: 'Immunity Screening',
                price: 199
            },
            {
                img: '/images/vitamin.png',
                name: 'Vitamin Profile',
                price: 799
            },
            {
                img: '/images/energy.png',
                name: 'Energy Screening',
                price: 699
            },
            {
                img: '/images/body-health.png',
                name: 'Full Body Checkup',
                price: 999
            },
            {
                img: '/images/boneHealth.png',
                name: 'Bone Health Screening',
                price: 799
            },
            {
                img: '/images/fever_panel.png',
                name: 'Fever Panel',
                price: 299
            },
            {
                img: '/images/men.png',
                name: 'Fitness Essentials-Men',
                price: 1599
            },
            {
                img: '/images/women.png',
                name: 'Fitness Essentials-Women',
                price: 1599
            }
        ]
    });
};

module.exports = {
    tests
}