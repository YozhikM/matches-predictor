/* @flow */

export default function(standing: Array<Object>) {
  return standing.map(team => {
    switch (team.teamName) {
      case 'Manchester City FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/yWIUk_64_90.png';
        break;
      case 'Manchester United FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Y3SNgUe_64_92.png';
        break;
      case 'Chelsea FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/fe84aERL_64_184.png';
        break;
      case 'Liverpool FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/6V9tGK_79.png';
        break;
      case 'Arsenal FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/KCxbqfg_64_2.png';
        break;
      case 'Tottenham Hotspur FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/kLqY0bNk_64_163.png';
        break;
      case 'Burnley FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/pY4dPVhR1_64_6983.png';
        break;
      case 'Leicester City FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/6UuPzq_64_77.png';
        break;
      case 'Watford FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/aBgh75_64_6978.png';
        break;
      case 'Everton FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/MBEG4wXV_64_191.png';
        break;
      case 'Southampton FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/k5zefLaF_64_759.png';
        break;
      case 'Huddersfield Town':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/twjeNRR_64_750.png';
        break;
      case 'Brighton & Hove Albion':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/G6nWc_64_265.png';
        break;
      case 'AFC Bournemouth':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/TXGub_64_6998.png';
        break;
      case 'Stoke City FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/f79t9px53_64_155.png';
        break;
      case 'Newcastle United FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/3XUTCp_64_210.png';
        break;
      case 'West Bromwich Albion FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/AdAMdd_64_281.png';
        break;
      case 'West Ham United FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/iCGLxcln8_64_33.png';
        break;
      case 'Swansea City FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/bkzAc_64_317.png';
        break;
      case 'Crystal Palace FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/SVe3Cb_64_67.png';
        break;
      case 'Atalanta BC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/YPu1u_64_253.png';
        break;
      case 'SS Lazio':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/TPajXU_64_73.png';
        break;
      case 'Torino FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/0ClizR_64_6884.png';
        break;
      case 'SSC Napoli':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Ff7KZf0s_64_107.png';
        break;
      case 'FC Internazionale Milano':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/DbTggvg_64_53.png';
        break;
      case 'Udinese Calcio':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/h9hoSrDzE_64_211.png';
        break;
      case 'Bologna FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/HE6XqbuO_64_20.png';
        break;
      case 'Juventus Turin':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/ykUwvwJ_64_197.png';
        break;
      case 'AS Roma':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/iD66cJ_64_132.png';
        break;
      case 'Cagliari Calcio':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/CH4E8iZNB_64_56.png';
        break;
      case 'FC Crotone':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/gHUi1Og_64_7182.png';
        break;
      case 'AC Chievo Verona':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/rIPfmuyx_64_71.png';
        break;
      case 'UC Sampdoria':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/5PAk9vr_64_135.png';
        break;
      case 'US Sassuolo Calcio':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/NBE9p_64_7239.png';
        break;
      case 'ACF Fiorentina':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/12K93x8b8_64_172.png';
        break;
      case 'Genoa CFC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/BEeB8uB8v_64_212.png';
        break;
      case 'Benevento Calcio':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/H4Xtju_64_9074.png';
        break;
      case 'SPAL Ferrara':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/4E3zN_64_8251.png';
        break;
      case 'Hellas Verona FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Ieyvr_64_758.png';
        break;
      case 'AC Milan':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/mvreMd990_64_99.png';
        break;
      case 'FC Barcelona':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Fof4Mg_64_12.png';
        break;
      case 'Valencia CF':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/uWY8E82h_64_30.png';
        break;
      case 'CD Leganes':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/jmc1Z9Qyx_64_8546.png';
        break;
      case 'Club Atlético de Madrid':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/93GXs6ga_64_3.png';
        break;
      case 'Real Madrid CF':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/LoMju_64_126.png';
        break;
      case 'Sevilla FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/gwtgXg7sg_64_143.png';
        break;
      case 'Villarreal CF':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/kGfid7_64_36.png';
        break;
      case 'Getafe CF':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/7CoUQ_64_230.png';
        break;
      case 'Girona FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/4DyLlK_64_752.png';
        break;
      case 'Real Sociedad de Fútbol':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/CbNlE_64_203.png';
        break;
      case 'RC Celta de Vigo':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/ryVB6nU_64_259.png';
        break;
      case 'Real Betis':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/b22N4B_64_14.png';
        break;
      case 'SD Eibar':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/06m5m_64_6904.png';
        break;
      case 'Athletic Club':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/zyIWzVrnq_64_296.png';
        break;
      case 'Levante UD':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/A2TnIcZYm_64_75.png';
        break;
      case 'RCD Espanyol':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/LuuQIGS_64_195.png';
        break;
      case 'RC Deportivo La Coruna':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/maISZKo_64_49.png';
        break;
      case 'Deportivo Alavés':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/fBIQgft_64_6902.png';
        break;
      case 'Málaga CF':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/42dSqHsC_64_87.png';
        break;
      case 'UD Las Palmas':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/DqohGxD6q_64_7030.png';
        break;
      case 'FC Bayern München':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/HroJt6N_64_8.png';
        break;
      case 'Red Bull Leipzig':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/A8o9up_64_7832.png';
        break;
      case 'FC Schalke 04':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/MbOwKkm_64_185.png';
        break;
      case 'Bor. Mönchengladbach':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/6ZSzM_64_264.png';
        break;
      case 'Bayer Leverkusen':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/3HTrlF_64_9.png';
        break;
      case 'TSG 1899 Hoffenheim':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/elHs4iap_64_260.png';
        break;
      case 'FC Augsburg':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/TcTBI_64_5.png';
        break;
      case 'Borussia Dortmund':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/UUof56_64_263.png';
        break;
      case 'Eintracht Frankfurt':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/l8QEA6K_64_254.png';
        break;
      case 'Hannover 96':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/yDHaex_64_44.png';
        break;
      case 'VfL Wolfsburg':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Vi3lyB_64_39.png';
        break;
      case 'Hertha BSC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/05Lhn_64_46.png';
        break;
      case 'VfB Stuttgart':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/9wpkDzeLd_64_190.png';
        break;
      case '1. FSV Mainz 05':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/W7ugHsZA_64_250.png';
        break;
      case 'Hamburger SV':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/dhYvf3ag_64_43.png';
        break;
      case 'SC Freiburg':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/1TO6r4_64_174.png';
        break;
      case 'Werder Bremen':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/KLNw0C_64_32.png';
        break;
      case '1. FC Köln':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/P0OAXqq4_64_61.png';
        break;
      case 'Paris Saint-Germain':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/piWoLhIOi_64_120.png';
        break;
      case 'Olympique Lyonnais':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/h1LbLAgls_64_83.png';
        break;
      case 'AS Monaco FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/m4CpmSSWF_64_100.png';
        break;
      case 'Olympique de Marseille':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/PEbTkCG_93.png';
        break;
      case 'FC Nantes':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/F21oJTz_64_681.png';
        break;
      case 'Stade Rennais FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/CmqVhr_64_130.png';
        break;
      case 'Montpellier Hérault SC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Up7IgYW_64_101.png';
        break;
      case 'OGC Nice':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/PiqeQHU_64_284.png';
        break;
      case 'SM Caen':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Yj7fCq1_64_299.png';
        break;
      case 'EA Guingamp':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/seKeHTX24_64_683.png';
        break;
      case 'Amiens SC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/YXfUDJSN_64_9007.png';
        break;
      case 'RC Strasbourg Alsace':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/KuwYNX80_64_9008.png';
        break;
      case 'Dijon FCO':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/tnOJ2OSE_64_324.png';
        break;
      case 'FC Girondins de Bordeaux':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/SzlKfG41_64_22.png';
        break;
      case 'AS Saint-Étienne':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/4k3igiM_64_145.png';
        break;
      case 'Toulouse FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/C8ga7_64_238.png';
        break;
      case 'ES Troyes AC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/yVazio9v_64_682.png';
        break;
      case 'OSC Lille':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/fc9csV_64_82.png';
        break;
      case 'Angers SCO':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/UYaxqtwZ_64_7140.png';
        break;
      case 'FC Metz':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/fQCM0quS_64_98.png';
        break;
      case 'Wolverhampton Wanderers FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/1KWoQ_41.png';
        break;
      case 'Bristol City':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/JpG9DNPvh_28.png';
        break;
      case 'Cardiff City FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/MzRVwi3B2_58.png';
        break;
      case 'Derby County':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/spf6EB5Z_741.png';
        break;
      case 'Leeds United':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/N68dWnaL_6930.png';
        break;
      case 'Sheffield United FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/lEegN3NFe_6992.png';
        break;
      case 'Middlesbrough FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/njdvtW_289.png';
        break;
      case 'Aston Villa FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/TJoULs2_214.png';
        break;
      case 'Preston North End':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/LRW9Jpmqi_6989.png';
        break;
      case 'Ipswich Town':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/SpUkErgq_746.png';
        break;
      case 'Fulham FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/LDLlKjCZS_176.png';
        break;
      case 'Brentford FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/kaKCZ_6997.png';
        break;
      case 'Nottingham Forest':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/IKz5BL_109.png';
        break;
      case 'Sheffield Wednesday':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/TqBnQi_6994.png';
        break;
      case 'Norwich City FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/zhBqj_227.png';
        break;
      case 'Millwall FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/iPsvu48I_6923.png';
        break;
      case 'Reading':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/SHAC2Z4_129.png';
        break;
      case 'Queens Park Rangers':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/pmwXr9_316.png';
        break;
      case 'Hull City FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/zcdKeT3Y_6968.png';
        break;
      case 'Barnsley FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/1A6S13qqG_243.png';
        break;
      case 'Burton Albion FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/GVbYSFo_6986.png';
        break;
      case 'Sunderland AFC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/GeRCv_137.png';
        break;
      case 'Bolton Wanderers FC':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/vYDP8XOBK_21.png';
        break;
      case 'Birmingham City':
        team.crestURI = 'http://st1.soccer365.ru/s1/logo/Xg5nFhy_16.png';
        break;
      default:
        break;
    }
    return team;
  });
}
