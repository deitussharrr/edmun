import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

const committees = [
  {
    name: 'AIPPM (ALL INDIA POLITICAL PARTIES MEET)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'US SENATE (HAS 4 CHAIRPERSONS)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'UNGA (UNITED NATIONS GENERAL ASSEMBLY)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'UNTAC (United Nations Transitional Authority in Cambodia)',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'National Economic Council',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'Nuclear Emergency Session',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
  {
    name: 'C-34',
    logo: 'https://via.placeholder.com/150',
    chairperson: 'Chairperson Name',
    viceChairperson: 'Vice Chairperson Name',
    director: 'Director Name',
  },
];

function Committees() {
  return (
    <div className="min-h-screen bg-grid" style={{ backgroundColor: '#002211' }}>
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-glow">Committees</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl text-white hover-card">
                <img src={committee.logo} alt={committee.name} className="w-24 h-24 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">{committee.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    <span>Chairperson: {committee.chairperson}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    <span>Vice Chairperson: {committee.viceChairperson}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 mr-3" />
                    <span>Director: {committee.director}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Committees;