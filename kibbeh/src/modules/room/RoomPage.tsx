import { useRouter } from "next/router";
import React from "react";
import { PageComponent } from "../../types/PageComponent";
import { WaitForWsAndAuth } from "../auth/WaitForWsAndAuth";
import { FollowingOnlineController } from "../dashboard/FollowingOnlineController";
import { DesktopLayout } from "../layouts/DesktopLayout";
import { RoomPanelController } from "./RoomPanelController";
import { UserPreviewModalProvider } from "./UserPreviewModalProvider";

interface RoomPageProps {}

export const RoomPage: PageComponent<RoomPageProps> = ({}) => {
  return (
    <WaitForWsAndAuth>
      <DesktopLayout>
        <UserPreviewModalProvider>
          <FollowingOnlineController />
          <RoomPanelController />
          <div />
        </UserPreviewModalProvider>
      </DesktopLayout>
    </WaitForWsAndAuth>
  );
};

RoomPage.ws = true;
