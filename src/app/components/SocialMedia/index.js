import React from 'react';

import { Navigation, Link } from 'react-toolbox/lib';

import { BrandColor, RssIcon, TwitterIcon, LinkedinIcon, GithubIcon, StackoverflowIcon, } from '../Icons';

import theme from './theme.css'

class SocialMedia extends React.Component {
 
    //icon을 인자로 어떤브랜드냐 배경이냐 폰트색이냐 옵션을 주도록 하고 아예 react 컴포넌트로 만들어 버리자 BrandIcon으로 하고 svg만을 리턴하도록 색상은 컴포넌트안에 색상도 미리지정 ㄱ
    render() {
        return (
            <footer className={theme.footer}>
                <Navigation type='horizontal' theme={theme}>
                    <Link href='https://www.linkedin.com/in/dong-jin-park-123a74145/' icon={<LinkedinIcon/>} title='Linkedin' theme={theme} />
                    <Link href='https://github.com/the1900' icon={<GithubIcon/>} title='Github' theme={theme} />
                    <Link href='https://twitter.com/the1900_' icon={<TwitterIcon/>} title='Twitter' theme={theme} style={{color: BrandColor.twitter}}/>
                    <Link href='https://stackoverflow.com/users/4334109/the1900' icon={<StackoverflowIcon/>} title='Stackoverflow' theme={theme} />
                    <Link href='#' icon={<RssIcon/>} title='RSS' theme={theme} />
                </Navigation>
            </footer>
        );
    }
}

export default SocialMedia;