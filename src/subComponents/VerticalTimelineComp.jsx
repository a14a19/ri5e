import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function VerticalTimelineComp() {
  return (
    <div className='bg-black px-5 py-28'>
      <h2 className='md:text-5xl text-3xl font-bold mb-20 px-10'>Our Story</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'transparent', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  transparent' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title text-3xl font-semibold">2023</h3>
          <p>
            Embarking on a new journey
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'transparent', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  transparent' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title text-3xl font-semibold">2024</h3>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

