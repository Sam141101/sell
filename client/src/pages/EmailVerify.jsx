import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: teal;
`;

const Wrapper = styled.div`
    background-color: white;
    padding: 25px;
    width: 27%;
    border-radius: 3px;
    ${mobile({
        width: '75%',
    })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    // margin-top: 30px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;
const Button = styled.button`
    font-weight: 500;
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-top: 15px;
    border-radius: 3px;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

const Span = styled.span`
    padding: 10px 0;
    font-size: 14px;
    color: red;
    font-weight: 500;
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background: white;
    width: 100%;
    height: 75px;
    align-items: center;
    justify-content: space-between;
    padding: 0 275px;
`;

const HeaderContai = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderImg = styled.img`
    height: 38px;
    cursor: pointer;
`;

const HeaderTitle = styled.h2`
    font-size: 26px;
    padding-left: 25px;
`;

const HeaderHelp = styled.p`
    color: red;
    font-weight: 500;
    cursor: pointer;
`;

const Text = styled.p`
    white-space: pre;
    padding-right: 4px;
    color: rgba(0, 0, 0, 0.26);
    text-align: center;
    width: 100%;
`;

const TextLine = styled.span`
    color: #ee4d2d;
    font-weight: 500;
    margin-left: 7px;
    cursor: pointer;
`;

const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

// --------------------------------------------------------------

const EmailVerify = () => {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const blurEmail = (e) => {
        // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if (!e.target.value) {
        //     document.getElementById('email').innerHTML = 'Vui l??ng nh???p tr?????ng n??y';
        //     setConfirmEmail(false);
        // } else if (!regex.test(e.target.value)) {
        //     document.getElementById('email').innerHTML = 'Tr?????ng n??y ph???i l?? email';
        //     setConfirmEmail(false);
        // } else {
        //     document.getElementById('email').innerHTML = '';
        //     setConfirmEmail(true);
        //     document.getElementById('succes').innerHTML = '';
        // }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:5000/api/auth/confirm/register`;
            const { data: res } = await axios.post(url, { email });
            console.log('x??c th???c email');
            setMsg(res.message);
        } catch (error) {
            console.log('x??c th???c email th???t b???i');
        }
    };

    return (
        <div>
            <Header>
                <HeaderContai>
                    <Link to="/">
                        <HeaderImg src="https://file.hstatic.net/200000312481/file/2222_1790556c641f404aab8dfb038b47eb0e.png" />
                    </Link>
                    <HeaderTitle>????ng k??</HeaderTitle>
                </HeaderContai>
                <HeaderHelp>B???n c???n gi??p ????? ?</HeaderHelp>
            </Header>
            <Container>
                <Wrapper>
                    <Title style={{ marginBottom: '30px' }}>????ng k??</Title>
                    <Form>
                        {/* Email */}
                        <FormInput>
                            <Input
                                type="text"
                                placeholder="Gmail"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                onBlur={blurEmail}
                            />
                            {msg && <Span id="email">{msg}</Span>}
                            <Button
                                style={{ marginTop: '30px' }}
                                disabled={!email}
                                onClick={handleClick}
                            >
                                TI???P THEO
                            </Button>
                        </FormInput>
                        <Agreement>
                            B???ng c??ch t???o m???t t??i kho???n, t??i ?????ng ?? v???i vi???c x??? l?? d??? li???u
                            c?? nh??n c???a m??nh theo
                            <b
                                style={{
                                    color: '#ee4d2d',
                                    fontSize: '11px',
                                    marginLeft: '3px',
                                }}
                            >
                                ??I???U KHO???N D???CH V???
                            </b>{' '}
                            &{' '}
                            <b style={{ color: '#ee4d2d', fontSize: '11px' }}>
                                CH??NH S??CH B???O M???T
                            </b>
                        </Agreement>

                        <Text>
                            B???n ???? c?? t??i kho???n?
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <TextLine>????ng nh???p</TextLine>
                            </Link>
                        </Text>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
};

export default EmailVerify;
