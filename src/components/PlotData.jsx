// Consider a black soil region where crops like wheat(monocot), grams(dicot) can be grown. A man has 10 hectare land where he can grow either of them or both of them in some proportion(say x:y). Let us assume that if the soil fertility is 100% there is an yield of 4 tons of wheat per hectare. Growing only wheat reduces the fertility of soil by 10% every year.

export var PlotData_1= [
    {
        soil_fertility:100,
        wheat_quantity:40,
        first_saleprice_of_wheat:13900,
        total_revenue:556000
    },
    {
        soil_fertility:90,
        wheat_quantity:36,
        first_saleprice_of_wheat:14300,
        total_revenue:514800
    },
    {
        soil_fertility:80,
        wheat_quantity:32,
        first_saleprice_of_wheat:13500,
        total_revenue:432000
    },
    {
        soil_fertility:70,
        wheat_quantity:28,
        first_saleprice_of_wheat:12700,
        total_revenue:355600
    },
    {
        soil_fertility:60,
        wheat_quantity:24,
        first_saleprice_of_wheat:13400,
        total_revenue:321600
    },
    {
        soil_fertility:50,
        wheat_quantity:20,
        first_saleprice_of_wheat:15000,
        total_revenue:300000
    }
]
// Another farmer of same region grows 3:2 proportion of wheat and Bengal gram. Bengal gram is a dicot, deep rooted crop which fixes atmospheric nitrogen in to soil. This would maintain nitrogen content in the soil. Now, say the remaining nutrients contributing to fertility reduce by 3% a year.(100% soil fertility would yield 2 ton of Bengal gram per hectare)


export var PlotData_2=[
    {
        soil_fertility:100,
        wheat_quantity:24,
        gram_quantity:8,
        first_saleprice_of_wheat:13900,
        first_saleprice_of_gram:22000,
        revenue_earned_from_wheat:333600,
        revenue_earned_from_gram:176000,
        total_revenue:509600
    },
    {
        soil_fertility:97,
        wheat_quantity:23.28,
        gram_quantity:7.76,
        first_saleprice_of_wheat:14300,
        first_saleprice_of_gram:21600,
        revenue_earned_from_wheat:332904,
        revenue_earned_from_gram:167616,
        total_revenue:500520
    },
    {
        soil_fertility:94,
        wheat_quantity:22.56,
        gram_quantity:7.52,
        first_saleprice_of_wheat:13500,
        first_saleprice_of_gram:22300,
        revenue_earned_from_wheat:304560,
        revenue_earned_from_gram:167696,
        total_revenue:572256
    },
    {
        soil_fertility:91,
        wheat_quantity:21.84,
        gram_quantity:7.28,
        first_saleprice_of_wheat:12700,
        first_saleprice_of_gram:20000,
        revenue_earned_from_wheat:277368,
        revenue_earned_from_gram:145600,
        total_revenue:422968
    },
    {
        soil_fertility:88,
        wheat_quantity:21.12,
        gram_quantity:7.04,
        first_saleprice_of_wheat:13400,
        first_saleprice_of_gram:22900,
        revenue_earned_from_wheat:283008,
        revenue_earned_from_gram:161216,
        total_revenue:444224
    },
    {
        soil_fertility:85,
        wheat_quantity:20.4,
        gram_quantity:6.8,
        first_saleprice_of_wheat:15000,
        first_saleprice_of_gram:23500,
        revenue_earned_from_wheat:306000,
        revenue_earned_from_gram:159800,
        total_revenue:465800
    }
]