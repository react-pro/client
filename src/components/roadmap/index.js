import React from 'react';
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
  } from 'beautiful-skill-tree';
import customTheme from './components/custom-theme';
import './index.scss';
  
const response = {
    "children": [
        {
            "_id": "5f45df99b6d5054a1c9a9455",
            "name": "HTML",
            "links": [
                {
                    "_id": "5f45df99b6d5054a1c9a9456",
                    "name": "123",
                    "source": "http"
                }
            ],
            "__v": 0
        }
    ],
    "_id": "5f45df0c88bb6e54b4d2013b",
    "name": "Internet",
    "links": [
        {
            "_id": "5f45df0c88bb6e54b4d2013c",
            "name": "123",
            "source": "http"
        }
    ],
    "__v": 0
};

const getLinks = (links) => {
    return links.map((el, i) => {
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

const MOC_DATA = {
    userId: 'qwqw',
    mainTech: 'Frontend',
    children: [ 
        { id: '1', name: 'internet', completed: true, details: [{name: 'tech 1'}, {name: 'tech 2'}, {name: 'tech 3'}, {name: 'tech 4'}], 
            children: [
                { id: '2', name: 'html', parent: 'internet', completed: true, details: [{name: 'tech 1'}, {name: 'tech 2'}, {name: 'tech 3'}, {name: 'tech 4'}], 
                children: [
                    { id: '3', name: 'css', parent: 'html', completed: true, details: [{name: 'tech 1'}, {name: 'tech 2'}, {name: 'tech 3'}], 
                    children: [
                        { id: '4', name: 'JavaScript', parent: 'css',  completed: false, details: [{name: 'tech 1', link: 'wwwww'}, {name: 'tech 2', link: 'wwwww'}, {name: 'tech 3', link: 'wwwww'}], 
                            children: [
                                { id: '5', name: 'Version Control System', parent: 'JavaScript',  completed: false, details: [{name: 'tech 1', link: 'wwwww'}] },
                                { id: '6', name: 'Repo hosting services', parent: 'JavaScript',  completed: false, details: [{name: 'tech 1', link: 'wwwww'}] },
                            ]}
                    ]},
            ]},
        ]},
    ]
    
    // skills: [ 
    //     { id: '1', name: 'internet', completed: true, details: [{name: 'tech 1'}, {name: 'tech 2'}, {name: 'tech 3'}, {name: 'tech 4'}] },
    //     { id: '2', name: 'html', parent: 'internet', completed: true, details: [{name: 'tech 1'}, {name: 'tech 2'}, {name: 'tech 3'}, {name: 'tech 4'}] },
    //     { id: '3', name: 'css', parent: 'html', completed: true, details: [{name: 'tech 1'}, {name: 'tech 2'}, {name: 'tech 3'}] },
    //     { id: '4', name: 'JavaScript', parent: 'css',  completed: false, details: [{name: 'tech 1', link: 'wwwww'}, {name: 'tech 2', link: 'wwwww'}, {name: 'tech 3', link: 'wwwww'}] },
    //     { id: '5', name: 'Version Control System', parent: 'JavaScript',  completed: false, details: [{name: 'tech 1', link: 'wwwww'}] },
    //     { id: '6', name: 'Repo hosting services', parent: 'JavaScript',  completed: false, details: [{name: 'tech 1', link: 'wwwww'}] },
    //     { id: '7', name: 'GitHub', parent: 'Repo hosting services',  completed: false, details: [{name: 'tech 1', link: 'wwwww'}] },
    //     { id: '8', name: 'Basic usage of Git', parent: 'Version Control System', completed: false, details: [{name: 'tech 1', link: 'wwwww'}] },
    // ]
};

const RoadMap = (props) => {
 
    return (
        <div className="road-map">
            <SkillProvider>
                <SkillTreeGroup theme={customTheme}>
                    {({ skillCount }) => (
                        <SkillTree
                        treeId="first-tree"
                        title="Frontend"
                        data={data1}
                        />
                    )}
                </SkillTreeGroup>
            </SkillProvider>
        </div>
    )
}

export default RoadMap;