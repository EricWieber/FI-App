/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2018 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#ifdef USE_TI_UIBUTTON

#import "TiToolbar.h"
#import "TiToolbarButton.h"
#import "TiUINavBarButton.h"
#import "TiViewProxy.h"

@interface TiUIButtonProxy : TiViewProxy <TiToolbarButton> {
  @private
  UIButtonType styleCache;
  TiUINavBarButton *button;
  id<TiToolbar> toolbar; // weak
}

@end

#endif
