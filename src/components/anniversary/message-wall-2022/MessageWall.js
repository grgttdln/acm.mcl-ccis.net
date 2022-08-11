import React, { useState, useEffect } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import Confetti from 'react-confetti';
import EndGallery from './pages/EndGallery';
import JoiningMclAcm from './pages/JoiningMclAcm';
import MostMemorableMoment from './pages/MostMemorableMoment';
import MessageToAspiringMembers from './pages/MessageToAspiringMembers';
import TitleCanvas from './pages/Splash';
import TestBed from './pages/TestBed';
import PreviousPageButton from './common/PreviousPageButton';
import NextPageButton from './common/NextPageButton';
import BackHomeButton from './common/BackHomeButton';
import dimensions from './dimensions';

export default function MessageWall() {
  const canvasWidth = 360;
  const canvasHeight = 640;

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = [
    <TitleCanvas width={canvasWidth} height={canvasHeight} />,
    <MostMemorableMoment width={canvasWidth} height={canvasHeight} />,
    <JoiningMclAcm width={canvasWidth} height={canvasHeight} />,
    <MessageToAspiringMembers width={canvasWidth} height={canvasHeight} />,
    <EndGallery width={canvasWidth} height={canvasHeight} />,
  ];

  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;
  const hasPreviousPage = currentPageIndex - 1 >= 0;
  const hasNextPage = currentPageIndex + 1 < pages.length;

  function goBackHome() {
    setCurrentPageIndex(0);
  }

  function nextPage() {
    if (!hasNextPage) {
      return;
    }
    setCurrentPageIndex(currentPageIndex + 1);
  }

  function previousPage() {
    if (!hasPreviousPage) {
      return;
    }
    setCurrentPageIndex(currentPageIndex - 1);
  }

  const [showConfetti, setshowConfetti] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowConfetti(false);
    }, 3000);
  }, []);
  const [destroyConfetti, setDestroyConfetti] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDestroyConfetti(false);
    }, 10000);
  }, []);

  return (
    <div>
      {destroyConfetti ? (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={showConfetti ? 100 : 0}
        />
      ) : (
        <></>
      )}

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Group>{pages[currentPageIndex]}</Group>
          <Group>
            {(isFirstPage || isLastPage) && (
              <BackHomeButton onClick={() => goBackHome()} x={20} y={20} />
            )}
            {hasPreviousPage && (
              <PreviousPageButton
                onClick={() => previousPage()}
                x={10}
                y={dimensions.pageHeight - 100 - 10}
              />
            )}
            {hasNextPage && (
              <NextPageButton
                onClick={() => nextPage()}
                x={dimensions.pageWidth - 100 - 10}
                y={dimensions.pageHeight - 100 - 10}
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
