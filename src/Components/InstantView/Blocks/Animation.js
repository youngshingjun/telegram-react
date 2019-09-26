/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Caption from './Caption';
import MediaAnimation from '../../../Components/Message/Media/Animation';

function Animation(props) {
    const { animation, caption, need_autoplay, openMedia } = props;

    return (
        <>
            <MediaAnimation animation={animation} style={{ margin: '0 auto' }} openMedia={openMedia} />
            <Caption text={caption.text} credit={caption.credit} />
        </>
    );
}

Animation.propTypes = {
    animation: PropTypes.object.isRequired,
    caption: PropTypes.object.isRequired,
    needAutoplay: PropTypes.bool.isRequired,
    openMedia: PropTypes.func
};

export default Animation;