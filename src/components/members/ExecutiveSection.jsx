import React from 'react';
import MemberInfo from './MemberInfo';
import MemberSection from './MemberSection';
import tempPhoto from '../../images/members/dog.jpg';

export default function ExecutiveSection({ officers }) {
  return (
    <MemberSection header='Executive Committee'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-y-8 lg:gap-y-14'>
        {officers.map(({ name, position }, index) => (
          <div
            className={`flex flex-col items-center ${
              index === 0 && 'col-span-4'
            }`}
          >
            <MemberInfo name={name} position={position} photo={tempPhoto} />
          </div>
        ))}
      </div>
    </MemberSection>
  );
}
