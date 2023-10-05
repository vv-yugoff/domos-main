const types = {
    secondary: 'Вторичная недвижимость',
    new: 'Новостройки',
    commercial: 'Коммерческая недвижимость',
    country: 'Загородная недвижимость',
    rent: 'Аренда недвижимости'
}

const countries = {
    all: 'all',
    russia: 'Россия'
}

const regions = {
    all: 'all',
    sverdlovks: 'Свердловская область'
}

const cities = {
    all: 'all',
    ekb: 'Екатеринбург'
}

const experience = {
    low: '',
    middle: '',
    more: 'Опыт работы более 5 лет'
}

const sex = {
    male: 'Мужской',
    female: 'Женский'
}

export const realtors = [
    {
        id: 1,
        name: 'Сергей Абрамов',
        type: [types.secondary, types.commercial, types.country, types.rent],
        country: countries.russia,
        region: regions.sverdlovks,
        city: cities.ekb,
        experience: experience.more,
        sex: sex.male
    },
    {
        id: 2,
        name: 'Татьяна Баннова',
        type: [types.secondary, types.new, types.country],
        country: countries.russia,
        region: regions.sverdlovks,
        city: cities.ekb,
        experience: '',
        sex: sex.female
    },
    {
        id: 3,
        name: 'Галина Бедросова',
        type: [types.secondary, types.new, types.commercial, types.country, types.rent],
        country: countries.russia,
        region: regions.all,
        city: cities.all,
        experience: '',
        sex: sex.female
    },
    {
        id: 4,
        name: 'Ольга Белоусова',
        type: [types.secondary, types.new, types.country],
        country: countries.russia,
        region: regions.sverdlovks,
        city: cities.ekb,
        experience: '',
        sex: sex.female
    },
    {
        id: 5,
        name: 'Лидия Богданова',
        type: [types.secondary, types.country],
        country: countries.russia,
        region: regions.sverdlovks,
        city: cities.ekb,
        experience: '',
        sex: sex.female
    },
    {
        id: 6,
        name: 'Лола Бублинская',
        type: [types.secondary, types.new],
        country: countries.russia,
        region: regions.sverdlovks,
        city: cities.ekb,
        experience: '',
        sex: sex.female
    },

];