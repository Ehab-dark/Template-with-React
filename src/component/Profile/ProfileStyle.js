
import styled from 'styled-components';

export const ProfileSkillsSection = styled.div`
padding: 50px 0;
overflow: hidden;

`;

export const ProfilePart = styled.div`
width: 50%;
float: left;

`;

export const ProfileList = styled.ul`
list-style: none;
text-align: left;
`;

export const ProfileItem = styled.li`
margin-bottom: 8px
`;

export const ProfileItemSpan = styled.span`
display: inline-block;
width: 100px;
font-weight: bold

`;

export const ProfileItemSpanWeb =styled.span`
font-weight: normal;
color: #eb5424
`;
export const SkillsPart = styled.div`
width: 50%;
float: left;
`;

export const SkillsDesce = styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px
`;

export const Bar =styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px
`;

export const TitleSpan = styled.span`
float: left;
margin-right:50px
`;

export const PercSpan = styled.span`
float: right;
margin-right: 100px;
`;

export const Parent = styled.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px
`;

export const ParentSpan = styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width: ${props => props.num === 1 ? "100%" : "70%" };
width: ${props => props.num === 2 ? "80%" : "70%"}

`;





export const Title = styled.h2`
font-size: 40px; 
margin-bottom: 20px

`;



