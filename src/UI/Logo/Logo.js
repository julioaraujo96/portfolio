import React from 'react';
import logo from '../../assets/logo.svg'

const Logo = () => {
    return (
            <div>
                <a className="flex items-center py-2 px-2">
					<img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
					<span className="font-semibold text-gray-500 text-lg font-mono">
                        Júlio Araújo
                    </span>
				</a>
			</div>
    );
};

export default Logo;