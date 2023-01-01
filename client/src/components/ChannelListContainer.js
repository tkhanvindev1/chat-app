import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

const cookies = new Cookies();

const SideBar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1_inner">
        <img src={HospitalIcon} alt="Hostpital" width="30"></img>
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1_inner" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width="30"></img>
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Chat App</p>
  </div>
);



export default function ChannelListContainer({ isCreating,setIsCreating,setCreateType,setIsEditing }) {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");      
    cookies.remove("username");
    cookies.remove("fullname");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  }
  return (
    <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch  />
                <ChannelList
                    style={{backgound:"red"}}
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                           
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                          
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                          
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
  );
}
