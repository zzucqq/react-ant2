import APIHelper from '../helpers/APIHelper';
import storage from '@zycfc/storage';

export default (id) => {
    let userInfo = JSON.parse(storage.getSession('userInfo'));
    return APIHelper.onequeryButton({ 
        id,
        userId:userInfo.id
    }).then(res => {
        if (res.returnCode === '000000') {
            return res.data.buttons;
        }
    })
}