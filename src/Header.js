import React from 'react';
import { SocialIcon } from 'react-social-icons';


export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
        <div className="social-media-header">
            <li>
                <SocialIcon 
                    network="facebook" 
                    bgColor="#000000"  
                    style={{ height: 45, width: 45 }}
                    url="https://www.facebook.com/harry.osullivan"
                    target="_blank"
                    />
            </li>
            <li>
                <SocialIcon 
                    network="instagram" 
                    bgColor="#000000"  
                    style={{ height: 45, width: 45 }}
                    url="https://www.instagram.com/harryo_sullivan/"
                    target="_blank"
                    />
            </li>
            <li>
                <SocialIcon 
                    network="linkedin" 
                    bgColor="#000000"  
                    style={{ height: 45, width: 45 }}
                    url="ps://www.linkedin.com/in/harry-o-sullivan-3a9a9676/"
                    target="_blank"
                    />
            </li>
        </div>
        )
    }
}