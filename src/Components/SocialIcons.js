import React from 'react';
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { StyledSocialIcons } from './Styles/SocialIcons.styled';

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https:twitter.com'>
                    <FaTwitter />
                </a>
                <a href='https:facebook.com'>
                    <FaFacebook />
                </a>
                <a href='https:linkedIn.com'>
                    <FaLinkedin />
                </a>
                
            </li>
            
        </StyledSocialIcons>
    );
};

export default SocialIcons;