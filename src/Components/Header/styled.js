import styled from 'styled-components';

export const AreaHeader = styled.div`

height: 60px;
background-image: linear-gradient(to right, #Fe5D26, #370d44);
color: white;


.container{
padding: 5px 20px;
display: flex;
align-items: center;
}

.logo{
flex: 1;

img{
    width: 45px;
}

}

nav{

    ul{
        display: flex;

    }

    li{
        list-style: none;
        margin-left: 20px;

        a{
            text-decoration: none;
            color: #fff;

            &:hover{
                color: #F5BB00;
            }
        }
    }
}
`;