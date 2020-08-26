import {
    GET_USER_SKILLS,
    UPDATE_USER_SKILLS,
} from './constants';


export function getUserSkills(skills) {
    return {
        type: GET_USER_SKILLS,
        payload: skills,
    };
};

export function updateUserSkills(skills) {
    return {
        type: UPDATE_USER_SKILLS,
        payload: skills,
    };
};
