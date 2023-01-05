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

    display: flex;

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

    .avatar{
        display: flex;
        align-items: center;

        img{
           width: 35px;
           border-radius: 20px;
           margin-left: 20px;
           margin-right: 10px;
        }

        label{
           font-size: 14px;
           cursor: pointer;
           color: #ccc;
        }

        @media screen and (max-width: 600px){
            label{
                display: none;
            }
        }
    }
}
`;