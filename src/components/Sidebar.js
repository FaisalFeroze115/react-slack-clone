import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import {sidebarItems} from "../data/SidebarData"
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id)=>{
        if(id){
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter Channel Nmae");
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Digital-Neibour
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item =>(
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
                
            </MainChannels>

            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channel
                    </div>   
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>

                <ChannelsList>
                    {
                        props.rooms.map(item=>(
                            <Channel onClick={()=>goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                    
                </ChannelsList>
            </ChannelsContainer>
            
        </Container>
    )
}

export default Sidebar

const ChannelsList = styled.div`
    color: rgb(188,171,188);
    padding-top: 12px;
`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 20px;
    :hover{
        background: #350D36;
    }
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 15px;
`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left: 20px;
    padding-right: 12px;
    
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover{
        background: #350D36;
    }
`

const Container = styled.div`
    background: #3f0e40;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div`
`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`