/* Just for the beginning we are using a static version, wait for Firebase database */
import MessageIcon from '@material-ui/icons/Message'
import Inbox from '@material-ui/icons/Inbox'
import Drafts from '@material-ui/icons/Drafts'
import Items from '@material-ui/icons/BookmarkBorder'
import People from '@material-ui/icons/People'
import More from '@material-ui/icons/Apps'


export const sidebarItems = [
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <Inbox />,
        text: "Direct Messages"
    },
    {
        icon: <Drafts />,
        text: "Mentions"
    },
    {
        icon: <Items />,
        text: "Items"
    },
    {
        icon: <People />,
        text: "Peoples and Groups"
    },
    {
        icon: <More />,
        text: "More"
    }
]