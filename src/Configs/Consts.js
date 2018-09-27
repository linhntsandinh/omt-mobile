import {Dimensions} from "react-native";

const guidelineBaseWidth = 1080;
const guidelineBaseHeight = 1920;
const scale = size => width / guidelineBaseWidth * size;
export const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export default  {
    client_id: '',
    client_secret: '',
    time_show_notify: 2000,
    longPress: 500,
    team: {
            leader: 'Leader',
            cskh: 'Chăm sóc khách hàng',
            mar: 'Marketing',
            dev: 'Kỹ thuật',
            intern: 'Sinh Viên',
            design: 'Sáng tạo',
            finance: 'Tài chính'
    },
    roles: {
            ceo: 'Founder & CEO',
            designmanager: 'Design Manager',
            hrmanager: 'HR Manager',
            marketingmanager:'Marketing Manager',
            qa: 'QA',
            designer: 'Designer',
            developer: 'Developer',
            artis: 'Artis',
            marketer: 'Marketer',
            startup: 'Startup',
            intership: 'Intership'
    },
    day: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
        26: '26',
        27: '27',
        28: '28',
        29: '29',
        30: '30',
        31: '31',
    },
    month: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
    },
    year: {
        2013: '2013',
        2014: '2014',
        2015: '2015',
        2016: '2016',
        2017: '2017',
        2018: '2018',
    },
    employee_list: {
        NguyenTheLinh: 'Nguyễn Thế Linh',
        BuiVietThanh: 'Bùi Việt Thành'
    },
    api_url: 'http://192.168.1.96:9000'
};
