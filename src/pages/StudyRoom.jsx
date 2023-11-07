import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import users from "../assets/data.json";
import Meeting from "./Meeting";

function StudyRoom() {
  const [meetings, setMeetings] = useState([]);
  const [authtoken, setAuthtoken] = useState("");
  const [isOpenMeeting, setIsOpenMeeting] = useState(false);

  useEffect(() => {
    ensureMeetings();
  }, []);

  function ensureMeetings() {
    if (!localStorage.getItem("meetings")) {
      localStorage.setItem("meetings", JSON.stringify([]));
      createMeeting();
      return;
    }

    const alreadyExistingMeetings = JSON.parse(localStorage.getItem("meetings"));
    if (alreadyExistingMeetings.length === 0) {
      createMeeting();
      return;
    }
    setMeetings(alreadyExistingMeetings);
  }

  function Joinmeeting(meetingId) {
    const index = (Math.random() * 11).toFixed(0);
    const user = users[index];

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.REACT_APP_PARTICIPATE_AUTH}`,
      },
      body: JSON.stringify({
        name: user.name,
        picture: "https://i.imgur.com/test.jpg",
        preset_name: "StudyRoom",
        custom_participant_id: user.id,
      }),
    };

    fetch(`https://api.dyte.io/v2/meetings/${meetingId}/participants`, options)
      .then((response) => response.json())
      .then((response) => {
        setAuthtoken(response.data.token);
        setIsOpenMeeting(true);
      })
      .catch((err) => console.error(err));
  }

  function createMeeting() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.REACT_APP_CREATE_AUTH}`,
      },
      body: '{"title":"string","preferred_region":"ap-south-1","record_on_start":false,"live_stream_on_start":false,"recording_config":{"max_seconds":60,"file_name_prefix":"string","video_config":{"codec":"H264","width":1280,"height":720,"watermark":{"url":"http://example.com","size":{"width":1,"height":1},"position":"left top"}},"audio_config":{"codec":"AAC","channel":"stereo"},"storage_config":{"type":"aws","access_key":"string","secret":"string","bucket":"string","region":"us-east-1","path":"string","auth_method":"KEY","username":"string","password":"string","host":"string","port":0,"private_key":"string"},"dyte_bucket_config":{"enabled":true},"live_streaming_config":{"rtmp_url":"rtmp://a.rtmp.youtube.com/live2"}}}',
    };
    fetch("https://api.dyte.io/v2/meetings", options)
      .then((response) => response.json())
      .then((response) => {
        const meetings = JSON.parse(localStorage.getItem("meetings"));
        localStorage.setItem(
          "meetings",
          JSON.stringify([...meetings, response.data])
        );
        setMeetings([...meetings, response.data]);
      })
      .catch(console.error);
  }

  return (
    <>
      <div className="bg-[linear-gradient(to_right_bottom,rgba(234,88,12,0.5),rgba(67,20,7,0.5)),url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] h-screen bg-cover">
        <Header />
        {isOpenMeeting ? (
          <Meeting token={authtoken} />
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-4 gap-10">
              {meetings.map((meeting, index) => {
                return (<>
                  <button
                    key={index}
                    onClick={() => {
                      Joinmeeting(meeting.id);
                    }}
                    className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                  >
                    Room 1
                  </button>
                  <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 2
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 3
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 4
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 5
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 6
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 7
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 8
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 9
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 10
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 11
                </button>
                <button
                  key={index}
                  onClick={() => {
                    Joinmeeting(meeting.id);
                  }}
                  className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60"
                >
                  Room 12
                </button>
                </>);
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StudyRoom;
