import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
} from 'beautiful-skill-tree';
import * as api from '../_services/api-service'; 
import { getUserSkills } from './store/actions';
import customTheme from './components/custom-theme';
import './index.scss';
  

const getLinks = (links) => {
    return links.map((el, i) => {
        return React.createElement('a', { href: el.source, className:'skills-link', key: `key-${i}`}, el.name );
    })
}

const getListItems = (tech) => {
    return tech.map((el, i) => {
        return React.createElement('a', { href: el.source, className:'skills-link', key: `key-${i}`}, el.name );
    })
}

let links = [
        {
            "_id": "5f45df0c88bb6e54b4d2013c",
            "name": "12345",
            "source": "http"
        },
        {
            "_id": "5f45df0c88bb6e54b4d20913c",
            "name": "12389",
            "source": "http"
        },
        {
            "_id": "5f45df0c88bb6e54b4d2013c9",
            "name": "1230909",
            "source": "http"
        }
]

// _id: string;
// name: string;
// links: [{
//     _id: string;
//     name: string;
//     source: string;
// }];
// children: ...

// type SkillType[] = {
//     id: string;
//     title: string;
//     optional?: boolean;
//     tooltip: {
//       content: React.ReactNode;
//       direction?: 'top' | 'left' | 'right' | 'bottom', // top = default
//     };
//     icon?: string;
//     children: SkillType[];
//   }

const transformData = (res) => {
    let newData = {
        id: res._id,
        title: res.name,
        closedByDefault: res.completed || false,
        tooltip: {
            content: 1 ? getLinks(res.links) : getListItems(res.links),
        }

    }
}

  const data1 = [
    {
      id: 'hello-world',
      title: 'Hello World',
      closedByDefault: true,
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [
        {
          id: 'hello-sun',
          title: 'Hello Sun',
          tooltip: {
            content: 
            React.createElement('a', { href: 'https://www.google.com'}, 'bbbbbbbbb')
            // `<a href="https://www.google.com"/>bbbbbbbbb</a>`
            //   'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
          },
          children: [],
        },
        {
          id: 'hello-stars',
          title: 'Hello Stars',
          optional: true,
          tooltip: {
            content:
              'This is the child of ‘Hello World and the sibling of ‘Hello Sun’. Notice how the app takes care of the layout automatically? That’s why this is called Beautiful Skill Tree and not just ‘Skill Tree’. (Also the npm namespace had already been taken for the latter so (flick hair emoji).',
          },
          children: [
            {
                id: 'hello-sun1',
                title: 'Hello Sun1',
                tooltip: {
                  content: getLinks(links),
                  //   'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
                },
                children: [],
              },
          ],
        },
      ],
    },
  ];


const RoadMap = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [data, setData] = useState({});
    const storedSkills = useSelector((state) => state.skills);
    const user = useSelector((state) => state.authentication.user);
    const storedUser = JSON.parse(localStorage.getItem('user'));

    async function fetchData() {
        const res = await api.requestWithToken(`/api/users/${storedUser.user._id}/skills?completed=50`, 'GET');
        res
            .json()
            .then((res) => {
                dispatch(getUserSkills(res));
                setLoading(true);
            })
            .catch((err) => setError(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (storedSkills) {
            setData(storedSkills);
        }
    }, [storedSkills]);
    console.log(storedSkills)
 
    return (
        <div className="road-map">
            {
                loading ?
                <Spinner animation="border" role="status" variant="primary">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                :

                storedSkills ? 
                    <SkillProvider>
                        <SkillTreeGroup theme={customTheme}>
                            {({ skillCount }) => (
                                <SkillTree
                                treeId="skills-tree"
                                title="Frontend"
                                data={data1}
                                />
                            )}
                        </SkillTreeGroup>
                    </SkillProvider>
                    :
                    <p>No skills yet. Take a quiz to start.</p>
            }
        </div>
    )
}

export default RoadMap;