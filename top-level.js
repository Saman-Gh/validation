const topLevel = [
    "com",
    "org",
    "net",
    "edu",
    "gov",
    "mil",
    "info",
    "shop",
    "biz",
    "io",
    "co",
    "tv",
    "me",
    "us",
    "uk",
    "ca",
    "au",
    "inc",
    "jp",
    "de",
    "fr",
    "cn",
    "ru",
    "br",
    "nl",
    "es",
    "it",
    "mx",
    "ch",
    "se",
    "no",
    "be",
    "at",
    "dk",
    "pl",
    "in",
    "kr",
    "za",
    "nz",
    "sg",
    "hk",
    "tw",
    "ae",
    "fi",
    "pt",
    "hu",
    "cz",
    "gr",
    "tr",
    "vn",
    "cl",
    "id",
    // Country Code Top-Level Domains (ccTLDs)
    "ad", // Andorra
    "ae", // United Arab Emirates
    "af", // Afghanistan
    "ag", // Antigua and Barbuda
    "ai", // Anguilla
    "al", // Albania
    "am", // Armenia
    "an", // Netherlands Antilles (no longer exists)
    "ao", // Angola
    "aq", // Antarctica
    "ar", // Argentina
    "as", // American Samoa
    "at", // Austria
    "au", // Australia
    "aw", // Aruba
    "ax", // Åland Islands
    "az", // Azerbaijan
    "ba", // Bosnia and Herzegovina
    "bb", // Barbados
    "bd", // Bangladesh
    "be", // Belgium
    "bf", // Burkina Faso
    "bg", // Bulgaria
    "bh", // Bahrain
    "bi", // Burundi
    "bj", // Benin
    "bm", // Bermuda
    "bn", // Brunei Darussalam
    "bo", // Bolivia
    "br", // Brazil
    "bs", // Bahamas
    "bt", // Bhutan
    "bw", // Botswana
    "by", // Belarus
    "bz", // Belize
    "ca", // Canada
    "cc", // Cocos (Keeling) Islands
    "cd", // Democratic Republic of the Congo
    "cf", // Central African Republic
    "cg", // Republic of the Congo
    "ch", // Switzerland
    "ci", // Côte d'Ivoire (Ivory Coast)
    "ck", // Cook Islands
    "cl", // Chile
    "cm", // Cameroon
    "cn", // China
    "co", // Colombia
    "cr", // Costa Rica
    "cu", // Cuba
    "cv", // Cape Verde
    "cw", // Curaçao
    "cx", // Christmas Island
    "cy", // Cyprus
    "cz", // Czech Republic
    "de", // Germany
    "dj", // Djibouti
    "dk", // Denmark
    "dm", // Dominica
    "do", // Dominican Republic
    "dz", // Algeria
    "ec", // Ecuador
    "ee", // Estonia
    "eg", // Egypt
    "er", // Eritrea
    "es", // Spain
    "et", // Ethiopia
    "eu", // European Union
    "fi", // Finland
    "fj", // Fiji
    "fk", // Falkland Islands (Malvinas)
    "fm", // Federated States of Micronesia
    "fo", // Faroe Islands
    "fr", // France
    "ga", // Gabon
    "gb", // United Kingdom
    "gd", // Grenada
    "ge", // Georgia
    "gf", // French Guiana
    "gg", // Guernsey
    "gh", // Ghana
    "gi", // Gibraltar
    "gl", // Greenland
    "gm", // Gambia
    "gn", // Guinea
    "gp", // Guadeloupe
    "gq", // Equatorial Guinea
    "gr", // Greece
    "gs", // South Georgia and the South Sandwich Islands
    "gt", // Guatemala
    "gu", // Guam
    "gw", // Guinea-Bissau
    "gy", // Guyana
    "hk", // Hong Kong
    "hm", // Heard Island and McDonald Islands
    "hn", // Honduras
    "hr", // Croatia
    "ht", // Haiti
    "hu", // Hungary
    "id", // Indonesia
    "ie", // Ireland
    "il", // Israel
    "im", // Isle of Man
    "in", // India
    "io", // British Indian Ocean Territory
    "iq", // Iraq
    "ir", // Iran
    "is", // Iceland
    "it", // Italy
    "je", // Jersey
    "jm", // Jamaica
    "jo", // Jordan
    "jp", // Japan
    "ke", // Kenya
    "kg", // Kyrgyzstan
    "kh", // Cambodia
    "ki", // Kiribati
    "km", // Comoros
    "kn", // Saint Kitts and Nevis
    "kp", // North Korea
    "kr", // South Korea
    "kw", // Kuwait
    "ky", // Cayman Islands
    "kz", // Kazakhstan
    "la", // Laos
    "lb", // Lebanon
    "lc", // Saint Lucia
    "li", // Liechtenstein
    "lk", // Sri Lanka
    "lr", // Liberia
    "ls", // Lesotho
    "lt", // Lithuania
    "lu", // Luxembourg
    "lv", // Latvia
    "ly", // Libya
    "ma", // Morocco
    "mc", // Monaco
    "md", // Moldova
    "me", // Montenegro
    "mg", // Madagascar
    "mh", // Marshall Islands
    "mk", // North Macedonia
    "ml", // Mali
    "mm", // Myanmar (Burma)
    "mn", // Mongolia
    "mo", // Macau
    "mp", // Northern Mariana Islands
    "mq", // Martinique
    "mr", // Mauritania
    "ms", // Montserrat
    "mt", // Malta
    "mu", // Mauritius
    "mv", // Maldives
    "mw", // Malawi
    "mx", // Mexico
    "my", // Malaysia
    "mz", // Mozambique
    "na", // Namibia
    "nc", // New Caledonia
    "ne", // Niger
    "nf", // Norfolk Island
    "ng", // Nigeria
    "ni", // Nicaragua
    "nl", // Netherlands
    "no", // Norway
    "np", // Nepal
    "nr", // Nauru
    "nu", // Niue
    "nz", // New Zealand
    "om", // Oman
    "pa", // Panama
    "pe", // Peru
    "pf", // French Polynesia
    "pg", // Papua New Guinea
    "ph", // Philippines
    "pk", // Pakistan
    "pl", // Poland
    "pm", // Saint Pierre and Miquelon
    "pn", // Pitcairn Islands
    "pr", // Puerto Rico
    "ps", // Palestine
    "pt", // Portugal
    "pw", // Palau
    "py", // Paraguay
    "qa", // Qatar
    "re", // Réunion
    "ro", // Romania
    "rs", // Serbia
    "ru", // Russia
    "rw", // Rwanda
    "sa", // Saudi Arabia
    "sb", // Solomon Islands
    "sc", // Seychelles
    "sd", // Sudan
    "se", // Sweden
    "sg", // Singapore
    "sh", // Saint Helena, Ascension and Tristan da Cunha
    "si", // Slovenia
    "sj", // Svalbard and Jan Mayen
    "sk", // Slovakia
    "sl", // Sierra Leone
    "sm", // San Marino
    "sn", // Senegal
    "so", // Somalia
    "sr", // Suriname
    "ss", // South Sudan
    "st", // São Tomé and Príncipe
    "su", // Soviet Union (no longer exists)
    "sv", // El Salvador
    "sx", // Sint Maarten
    "sy", // Syria
    "sz", // Eswatini
    "tc", // Turks and Caicos Islands
    ".td", // Chad
    "tf", // French Southern and Antarctic Lands
    "tg", // Togo
    "th", // Thailand
    "tj", // Tajikistan
    "tk", // Tokelau
    "tl", // Timor-Leste
    "tm", // Turkmenistan
    "tn", // Tunisia
    "to", // Tonga
    "tr", // Turkey
    "tt", // Trinidad and Tobago
    "tv", // Tuvalu
    "tw", // Taiwan
    "tz", // Tanzania
    "ua", // Ukraine
    "ug", // Uganda
    "uk", // United Kingdom
    "us", // United States
    "uy", // Uruguay
    "uz", // Uzbekistan
    "va", // Vatican City
    "vc", // Saint Vincent and the Grenadines
    "ve", // Venezuela
    "vg", // British Virgin Islands
    "vi", // United States Virgin Islands
    "vn", // Vietnam
    "vu", // Vanuatu
    "wf", // Wallis and Futuna
    "ws", // Samoa
    "ye", // Yemen
    "yt", // Mayotte
    "za", // South Africa
    "zm", // Zambia
    "zw"  // Zimbabwe
  ]

  module.exports = topLevel;