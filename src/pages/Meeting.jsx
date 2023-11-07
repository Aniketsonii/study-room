import { useEffect } from "react";
import { useDyteClient } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function Meeting({token}) {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      authToken: token,
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return (<>
    <div className="h-CH">
      <DyteMeeting mode="fill" meeting={meeting} />
    </div>
    </>);
}

export default Meeting;
