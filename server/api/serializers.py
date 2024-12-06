from rest_framework import serializers

class ElasticsearchSerializer(serializers.Serializer):
    '''
    Useful if you wanted to maintain naming standards between 
    languages. However, to keep things simple I did not actually use it.
    '''

    def to_representation(self, instance):
        '''
        Convert field names to camelCase for Elasticsearch compatibility.
        '''
        data = super().to_representation(instance)
        return {
            self._to_camel_case(key): value
            for key, value in data.items()
        }

    def _to_camel_case(self, snake_str):
        '''
        Convert snake_case string to camelCase.
        '''
        components = snake_str.split('_')
        return components[0] + ''.join(x.title() for x in components[1:])

class DocumentSerializer(serializers.Serializer):
    # Example of using proper snake_case
    is_exact_match = serializers.BooleanField(required=False)
    site_name = serializers.CharField(max_length=250, required=False)

class SiteSerializer(serializers.Serializer):
    # Used camalCase for simplicity
    infected = serializers.BooleanField(required=False)
    sort = serializers.CharField(max_length=50, required=False)
    upToDate = serializers.BooleanField(required=False)