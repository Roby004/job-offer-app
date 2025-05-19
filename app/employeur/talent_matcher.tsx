import { useDemoRouter } from '@toolpad/core/internal';
import React from 'react';
import { useNavigate } from 'react-router-dom';

//import useToolpadRouter  from '@toolpad/core/internal';
//import { useToolpadRouter } from '@toolpad/core/router';

/* *******Afaka alana fa données statiques ireto ********/
interface Campaign {
  id : number,
  name: string;
  role: string;
  department: string;
  participants: number;
  createdAt: string;
  status: 'Brouillon' | 'Activée' | 'Clôturée';
  team: string[];
  avatar: string;
}

const campaigns: Campaign[] = [
  {id: 1,
    name: 'RECRUTEMENT DE COMMERCIAUX',
    role: 'Key account manager',
    department: 'Recrutement',
    participants: 100,
    createdAt: '19/10/2021',
    status: 'Brouillon',
    team: ['+2'],
    avatar: '/app/images/avatar1.png',
  },
  {id: 2,
    name: 'AUDIT DES FRESH',
    role: 'Key account manager',
    department: 'Développement',
    participants: 100,
    createdAt: '19/10/2021',
    status: 'Brouillon',
    team: ['+4'],
    avatar: '/app/images/avatar1.png',
  },
  {
    id : 3,
    name: 'VERIFICATION LANGUES',
    role: 'Key account manager',
    department: 'Développement',
    participants: 1,
    createdAt: '19/10/2021',
    status: 'Activée',
    team: ['Vous'],
    avatar: '/app/images/avatar1.png',
  },
  {id : 4,
    name: 'RECRUITMENT CAMPAIGN',
    role: 'Key account manager',
    department: 'Recrutement',
    participants: 1,
    createdAt: '19/10/2021',
    status: 'Clôturée',
    team: ['Vous'],
    avatar: '/app/images/avatar1.png',
  },
  {
    id:5,
    name: 'RECRUTEMENT DANS IT',
    role: 'Key account manager',
    department: 'Recrutement',
    participants: 14,
    createdAt: '19/10/2021',
    status: 'Activée',
    team: ['Vous'],
    avatar: '/app/images/avatar1.png',
  },
];

const getStatusColor = (status: Campaign['status']) => {
  switch (status) {
    case 'Brouillon': return 'bg-blue-100 text-blue-600';
    case 'Activée': return 'bg-green-100 text-green-600';
    case 'Clôturée': return 'bg-gray-100 text-gray-500';
  }
};

const TalentMatcherPage: React.FC = () => {
    const navigate = useNavigate();

// const router = useDemoRouter(); //useToolpadRouter();

const handleRowClick = (id: number) => {
  navigate(`/recruteur/detail-de-l-offre/${id}`);
};
  return (
    <div className="bg-[#f6f8f9] min-h-screen px-10 py-6 font-sans">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Liste de vos campagnes</h1>
        <button className="flex items-center bg-white border border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 text-sm font-medium">
          <span className="mr-2 text-lg">＋</span> Ajouter
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center bg-white border px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
            <span className="text-gray-700 mr-2">Filtres</span>
            <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs">46</span>
          </button>
        </div>
        <input
          type="text"
          placeholder="Rechercher une campagne..."
          className="border rounded-md px-4 py-2 w-64 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-center text-sm text-gray-500 mb-2">
              <th className="pb-2">Nom de l’offre</th>
              <th className="pb-2">Équipe</th>
              <th className="pb-2">Participants</th>
              <th className="pb-2">Date de création</th>
              <th className="pb-2">Statut</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {campaigns.map((c, index) => (
               <tr key={index}>
                  <td colSpan={5}>
                    <div
                      onClick={() => handleRowClick(c.id)}
                      className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:bg-gray-50 transition"
                    >
                      <div className="w-1/3">
                        <p className="font-semibold text-sm">{c.name}</p>
                        <p className="text-gray-500 text-xs">{c.role}</p>
                        <p className="text-purple-500 text-xs">{c.department}</p>
                      </div>
                      <div className="w-1/5 flex items-center">
                        <img src={c.avatar} alt="avatar" className="w-8 h-8 rounded-full mr-1" />
                        {c.team.map((member, i) => (
                          <span
                            key={i}
                            className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs ml-1"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                      <div className="w-1/5 text-center text-sm">{c.participants}</div>
                      <div className="w-1/5 text-center text-sm">{c.createdAt}</div>
                      <div className="w-1/5 text-center">
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                            c.status
                          )}`}
                        >
                          {c.status}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-6 py-2 rounded-full">Voir plus</button>
      </div>
    </div>
  );
};

export default TalentMatcherPage;
