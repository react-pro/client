import {
    GET_USER_SKILLS,
    UPDATE_USER_SKILLS,
} from './constants';


const SkillsState = {
    skills: [],
    loaded: false,
    error: null,
};

const skillsReducer = ( state = SkillsState, action) => {
    switch (action.type) {
        case GET_USER_SKILLS:
            return {
                ...state,
                skills: action.payload,
                error: null,
            };

            case UPDATE_USER_SKILLS:
                return {
                    ...state,
                    skills: { ...state.skills, ...action.payload },
                    error: null,
                };

        default:
        return state;
    }
};

export default skillsReducer;
