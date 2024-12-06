from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import DocumentSerializer, SiteSerializer
from .queries import query_by_sitename, query_by_siteid

class Documents(APIView):
    
    def get(self, request, format="json"):
        serializer = DocumentSerializer(data=request.query_params)
        
        if not serializer.is_valid():
            return Response({"error": "Invalid parameters"}, status=404)

        return Response(query_by_sitename(serializer.data))
    

class SiteDocuments(APIView):

    def get(self, request, siteId, format="json"):

        serializer = SiteSerializer(data=request.query_params)

        if not serializer.is_valid():
            return Response({"error": "Invalid parameters"}, status=404)

        return Response(query_by_siteid(siteId, serializer.data))
