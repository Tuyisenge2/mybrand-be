
import basicInfo from './basicInfo';
import server from './server';
import tags from './tags';
import component from './components';
import user from './Users';
import deleteBlog from './Blogs/deleteBlog';

export default {
    ...basicInfo,
    ...server,
    ...tags,
    ...component,
    ...user,
    ...deleteBlog
};