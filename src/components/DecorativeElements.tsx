import React from 'react';

interface ProfileBorderProps {
  className?: string;
}

export const ProfileBorder: React.FC<ProfileBorderProps> = ({ className = "" }) => {
  return (
    <svg
      width="493"
      height="493"
      viewBox="0 0 493 493"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={{ stroke: '#474306', strokeWidth: '1px', fill: 'none' }}
    >
      <path
        d="M244.33 0.65625C328.692 -2.32455 416.872 37.4547 459.773 101.864L460.778 103.39C502.96 168.269 499.554 257.741 471.16 325.127L470.485 326.715C441.942 393.094 388.907 437.356 329.73 464.609L326.908 465.895C267.15 492.736 201.546 502.24 144.726 480.45L143.385 479.93L142.045 479.397C85.8545 456.796 38.5444 403.371 15.5098 335.397L14.9658 333.776C-7.77369 265.117 -5.61015 181.878 35.166 116.955L36.1367 115.425C77.6191 50.6913 157.958 4.38891 242.336 0.735352L244.33 0.65625Z"
        stroke="#474306"
      />
    </svg>
  );
};

interface BulletPointProps {
  className?: string;
}

export const BulletPoint: React.FC<BulletPointProps> = ({ className = "" }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
    >
      <circle cx="6.5" cy="6.5" r="6.5" fill="#03045E" />
    </svg>
  );
};

interface PlusIconProps {
  className?: string;
}

export const PlusIcon: React.FC<PlusIconProps> = ({ className = "" }) => {
  return (
    <div className={`w-6 h-6 ${className}`}>
      <div className="w-1.5 h-6 absolute bg-[#474306] rounded-md left-[9px] top-0" />
      <div className="w-1.5 h-6 -rotate-90 absolute bg-[#474306] rounded-md left-0 top-[9px]" />
    </div>
  );
};

interface DecorativeLinesProps {
  className?: string;
}

export const DecorativeLines: React.FC<DecorativeLinesProps> = ({ className = "" }) => {
  return (
    <div className={`absolute w-[104px] h-[29px] ${className}`}>
      <div className="w-[5px] h-[30px] absolute rotate-[24deg] bg-[#474306]" />
      <div className="w-[5px] h-[30px] absolute rotate-[24deg] bg-[#474306]" />
      <div className="w-[5px] h-[30px] absolute rotate-[24deg] bg-[#474306]" />
      <div className="w-[5px] h-[30px] absolute rotate-[24deg] bg-[#474306]" />
      <div className="w-[5px] h-[30px] absolute rotate-[24deg] bg-[#474306]" />
    </div>
  );
};
